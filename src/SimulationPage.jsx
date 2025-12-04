import React, { useRef, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

/* ---------------------------
   Constantes / UI
   --------------------------- */
const FRAMES_PER_POINT = 4;
const MENU_HEIGHT = "60px";
const ATMOSPHERE_HEIGHT = 50;
const GROUND_LEVEL = 0;

/* ---------------------------
   componente que desenha uma linha progressivamente
   --------------------------- */
function LineSegmentAnimated({
  points3,
  color = "white",
  speed = 1.0,
  maxStep = 3,
  delay = 0,
}) {
  const geometryRef = useRef();
  const drawRef = useRef(0);
  const total = points3.length;

  const flat = React.useMemo(() => {
    const arr = new Float32Array(points3.length * 3);
    for (let i = 0; i < points3.length; i++) {
      arr[3 * i + 0] = points3[i][0];
      arr[3 * i + 1] = points3[i][1];
      arr[3 * i + 2] = points3[i][2];
    }
    return arr;
  }, [points3]);

  useEffect(() => {
    if (!geometryRef.current) return;
    geometryRef.current.setAttribute(
      "position",
      new THREE.BufferAttribute(flat, 3)
    );
    geometryRef.current.setDrawRange(0, 0);
    drawRef.current = 0;
  }, [flat]);

  const frame = useRef(0);

  useFrame(() => {
    if (!geometryRef.current) return;

    frame.current++;

    if (frame.current < delay) return;

    drawRef.current = Math.min(
      total,
      drawRef.current + Math.max(1, Math.floor(speed * maxStep))
    );
    geometryRef.current.setDrawRange(0, drawRef.current);
  });

  return (
    <line>
      <bufferGeometry ref={geometryRef} />
      <lineBasicMaterial color={color} linewidth={2} />
    </line>
  );
}

/* ---------------------------
   ParticleAnimation / TrailLine / Spheres
   --------------------------- */
function TrailLine({ points, visible, color = "cyan" }) {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current || !points || points.length === 0) return;
    ref.current.geometry.setDrawRange(0, visible);
  }, [visible, points]);

  if (!points || points.length === 0) return null;

  return (
    <line ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flat())}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial attach="material" color={color} />
    </line>
  );
}

function Spheres({ points, visible, color = "cyan" }) {
  if (!points || points.length === 0) return null;

  return (
    <>
      {points.slice(0, visible).map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshStandardMaterial color={i === visible - 1 ? "white" : color} />
        </mesh>
      ))}
    </>
  );
}

function ParticleAnimation({ points }) {
  const [visible, setVisible] = useState(0);
  const frameRef = useRef(0);

  useEffect(() => {
    setVisible(0);
    frameRef.current = 0;
  }, [points]);

  useFrame(() => {
    if (!points || points.length === 0) return;

    frameRef.current += 1;
    if (frameRef.current % FRAMES_PER_POINT === 0) {
      setVisible((v) => (v >= points.length ? 0 : v + 1));
    }
  });

  if (!points || points.length === 0) return null;

  return (
    <>
      <TrailLine points={points} visible={visible} />
      <Spheres points={points} visible={visible} />
    </>
  );
}

/* ---------------------------
   CHUVEIRO ATMOSFÉRICO
   --------------------------- */

const SHOWER_PARAMS = {
  avgHadronicChildren: 4,
  maxGenerations: 6,
  primaryStartY: 200,
  firstInteractionY: 120,
  spread: 0.32,
  baseLength: 25,
  lengthDecay: 0.75,
  probPi0: 0.18,
  probPich: 0.36,
};

function samplePoisson(mean) {
  const L = Math.exp(-mean);
  let k = 0;
  let p = 1.0;
  while (p > L) {
    k++;
    p *= Math.random();
    if (k > 40) break;
  }
  return Math.max(0, k - 1);
}

function colorForType(type) {
  if (type === "primary" || type === "hadronic") return "#ff4444";
  if (type === "em") return "#3399ff";
  if (type === "muon") return "#33ff77";
  return "#ffffff";
}

function perturbDirection(baseDir, spreadScale) {
  const theta = Math.abs((Math.random() - 0.5) * spreadScale);
  const phi = Math.random() * Math.PI * 2;

  const up = new THREE.Vector3(0, -1, 0);
  const axis = new THREE.Vector3().crossVectors(up, baseDir);
  const angleBetween = Math.acos(Math.max(-1, Math.min(1, up.dot(baseDir))));
  const q = new THREE.Quaternion();
  if (axis.lengthSq() > 1e-6) {
    axis.normalize();
    q.setFromAxisAngle(axis, angleBetween);
  } else {
    q.identity();
  }

  const local = new THREE.Vector3(
    Math.sin(theta) * Math.cos(phi),
    -Math.cos(theta),
    Math.sin(theta) * Math.sin(phi)
  );
  local.applyQuaternion(q);
  return local.normalize();
}

function generateShower(params = SHOWER_PARAMS) {
  const lines = [];

  const start = new THREE.Vector3(0, params.primaryStartY, 0);
  const interaction = new THREE.Vector3(0, params.firstInteractionY, 0);

  const primaryPoints = [];
  const primarySteps = 6;
  for (let i = 0; i <= primarySteps; i++) {
    const t = i / primarySteps;
    primaryPoints.push([
      THREE.MathUtils.lerp(start.x, interaction.x, t),
      THREE.MathUtils.lerp(start.y, interaction.y, t),
      THREE.MathUtils.lerp(start.z, interaction.z, t),
    ]);
  }
  lines.push({
    type: "primary",
    points: primaryPoints,
    color: colorForType("primary"),
  });

  const queue = [];
  const nChildrenInit = Math.max(1, samplePoisson(params.avgHadronicChildren));
  for (let i = 0; i < nChildrenInit; i++) {
    const dir = perturbDirection(
      new THREE.Vector3(0, -1, 0),
      params.spread * 1.2
    );
    queue.push({
      pos: interaction.clone(),
      dir,
      gen: 1,
      type: "hadronic",
      length: params.baseLength * (0.8 + 0.4 * Math.random()),
    });
  }

  while (queue.length > 0) {
    const node = queue.shift();
    const { pos, dir, gen, type, length } = node;

    const end = pos
      .clone()
      .add(dir.clone().multiplyScalar(length * (0.8 + 0.4 * Math.random())));

    const nPoints = 3 + Math.floor(Math.random() * 4);
    const pts = [];
    for (let i = 0; i <= nPoints; i++) {
      const t = i / nPoints;
      pts.push([
        THREE.MathUtils.lerp(pos.x, end.x, t),
        THREE.MathUtils.lerp(pos.y, end.y, t),
        THREE.MathUtils.lerp(pos.z, end.z, t),
      ]);
    }

    lines.push({ type, points: pts, color: colorForType(type) });

    if (end.y <= GROUND_LEVEL + 1 || gen >= params.maxGenerations) continue;

    if (type === "hadronic") {
      const nFrag = Math.max(0, samplePoisson(params.avgHadronicChildren - 1));
      for (let k = 0; k < nFrag; k++) {
        const r = Math.random();
        if (r < params.probPi0) {
          const nGammas = 2 + Math.floor(Math.random() * 2);
          for (let g = 0; g < nGammas; g++) {
            const edir = perturbDirection(
              dir,
              params.spread * (1.0 + gen * 0.1)
            );
            queue.push({
              pos: end.clone(),
              dir: edir,
              gen: gen + 1,
              type: "em",
              length: Math.max(
                2,
                length * params.lengthDecay * (0.6 + Math.random() * 0.8)
              ),
            });
          }
        } else if (r < params.probPi0 + params.probPich) {
          const muDir = perturbDirection(
            dir,
            params.spread * (0.6 + gen * 0.2)
          );
          queue.push({
            pos: end.clone(),
            dir: muDir,
            gen: gen + 1,
            type: "muon",
            length: Math.max(15, length * (1.2 + Math.random() * 0.6)),
          });
        } else {
          const hdir = perturbDirection(dir, params.spread * (0.8 + gen * 0.2));
          queue.push({
            pos: end.clone(),
            dir: hdir,
            gen: gen + 1,
            type: "hadronic",
            length: Math.max(
              4,
              length * params.lengthDecay * (0.7 + Math.random() * 0.6)
            ),
          });
        }
      }
    } else if (type === "em") {
      const nChildrenEM = 1 + Math.floor(Math.random() * 3);
      for (let c = 0; c < nChildrenEM; c++) {
        const edir = perturbDirection(dir, params.spread * (0.6 + gen * 0.08));
        queue.push({
          pos: end.clone(),
          dir: edir,
          gen: gen + 1,
          type: "em",
          length: Math.max(
            1.5,
            length * params.lengthDecay * (0.7 + Math.random() * 0.6)
          ),
        });
      }
    } else if (type === "muon") {
      if (Math.random() < 0.15 && gen + 1 < params.maxGenerations) {
        const mdir = perturbDirection(dir, params.spread * 0.4);
        queue.push({
          pos: end.clone(),
          dir: mdir,
          gen: gen + 1,
          type: "muon",
          length: Math.max(10, length * 0.9),
        });
      }
    }
  }

  return lines;
}

function AtmosphericShowerSimulation({
  /* prop to trigger remount */ resetKey,
}) {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    // gerar sempre que montar / resetKey mudar
    const generated = generateShower(SHOWER_PARAMS);

    const sorted = [...generated].sort((a, b) => {
      const ay = a.points[0][1];
      const by = b.points[0][1];
      return by - ay;
    });

    setLines(sorted);
  }, [resetKey]);

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[0, ATMOSPHERE_HEIGHT + 40, 0]} intensity={0.6} />

      {lines.map((ln, i) => {
        const startY = ln.points[0][1];
        const delay = Math.max(0, (200 - startY) * 1.8);

        return (
          <LineSegmentAnimated
            key={i}
            points3={ln.points}
            color={ln.color}
            speed={0.5 + (i % 3) * 0.2}
            delay={delay}
          />
        );
      })}

      {/* Terra com raio diminuído em 10% */}
      <mesh position={[0, -2, 0]}>
        <sphereGeometry args={[45, 64, 64]} />
        <meshStandardMaterial
          color="#2233aa"
          roughness={1}
          metalness={0}
          wireframe={false}
        />
      </mesh>
    </>
  );
}

/* ---------------------------
   Função DAT
   --------------------------- */
async function fetchAndParseDat(filePath, normalize = false) {
  const r = await fetch(encodeURI(filePath));
  if (!r.ok)
    throw new Error(
      `HTTP ${r.status} - ${r.statusText} ao carregar ${filePath}`
    );

  const text = await r.text();
  let parsed = text
    .trim()
    .split("\n")
    .map((ln) => ln.trim())
    .filter((ln) => ln.length > 0 && !ln.startsWith("#"))
    .map((ln) => ln.split(/\s+/).map(Number))
    .filter((arr) => arr.length >= 3 && arr.every((n) => !Number.isNaN(n)));

  if (normalize) {
    parsed = parsed.map((arr) => [arr[0] / 1000, arr[1] / 1000, arr[2] / 1000]);
  }

  return parsed;
}

/* ---------------------------
   Página Principal
   --------------------------- */
export default function SimulationPage() {
  const [points, setPoints] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentSimulation, setCurrentSimulation] = useState("uniforme");

  // runId força remount do Canvas para "reiniciar" animações
  const [runId, setRunId] = useState(0);

  const loadSimulationData = useCallback(async (simulationType) => {
    setLoading(true);
    setError(null);
    setPoints(null);
    try {
      if (simulationType === "chuveiro") {
        // apenas trocar para chuveiro; a simulação do chuveiro é gerada no componente AtmosphericShowerSimulation
        setCurrentSimulation("chuveiro");
      } else {
        let filePath, normalize;
        if (simulationType === "uniforme") {
          filePath = "/Positions-p-uni.dat";
          normalize = false;
        } else if (simulationType === "variavel") {
          filePath = "/Positions-p-var.dat";
          normalize = true;
        } else {
          throw new Error("Tipo de simulação desconhecido.");
        }
        const data = await fetchAndParseDat(filePath, normalize);
        setPoints(data);
        setCurrentSimulation(simulationType);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadSimulationData("uniforme");
  }, [loadSimulationData]);

  /* Configurações de câmera por tipo de simulação */
  const cameraSettings = {
    // câmera do chuveiro ajustada: mais pra cima e um pouco mais distante
    chuveiro: {
      position: [0, 350, 900],
      fov: 55,
      minDistance: 200,
      maxDistance: 2000,
    },
    uniforme: {
      position: [3, 3, 12],
      fov: 20,
      minDistance: 1,
      maxDistance: 50,
    },
    variavel: {
      position: [3, 3, 12],
      fov: 20,
      minDistance: 1,
      maxDistance: 50,
    },
  };

  /* Reiniciar simulação (mesmo tipo) */
  function handleRestart() {
    // re-carrega / remonta
    setRunId((r) => r + 1);

    // para as simulações baseadas em dados, recarrega o arquivo
    if (currentSimulation === "uniforme" || currentSimulation === "variavel") {
      // recarrega o arquivo correspondente
      loadSimulationData(currentSimulation);
    } else if (currentSimulation === "chuveiro") {
      // apenas força remount (AtmosphericShowerSimulation observa runId via key do Canvas)
      // já feito com setRunId acima
    }
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#000",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* MENU */}
      <div
        style={{
          position: "relative",
          zIndex: 2000,
          height: MENU_HEIGHT,
          padding: "8px 16px",
          background: "#111",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
        }}
      >
        <button
          onClick={() => {
            loadSimulationData("uniforme");
            setRunId((r) => r + 1);
          }}
          disabled={loading}
          style={{ color: "white" }}
        >
          Campo Uniforme
        </button>
        <button
          onClick={() => {
            loadSimulationData("variavel");
            setRunId((r) => r + 1);
          }}
          disabled={loading}
          style={{ color: "white" }}
        >
          Campo Variável
        </button>
        <button
          onClick={() => {
            loadSimulationData("chuveiro");
            setRunId((r) => r + 1);
          }}
          disabled={loading}
          style={{ color: "white" }}
        >
          Chuveiro Atmosférico
        </button>
      </div>

      {/* Área de Simulação */}
      <div
        style={{
          position: "absolute",
          top: MENU_HEIGHT,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {/* Botão de reiniciar no canto superior esquerdo da área de simulação */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 12,
            zIndex: 2100,
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          <button
            onClick={handleRestart}
            style={{
              background: "rgba(0,0,0,0.7)",
              color: "white",
              borderRadius: 8,
              padding: "8px 10px",
              border: "1px solid rgba(255,255,255,0.12)",
              cursor: "pointer",
              fontSize: 13,
            }}
            title="Reinicia a simulação atual do zero"
          >
            Reiniciar simulação
          </button>
          <div
            style={{
              background: "rgba(0,0,0,0.55)",
              color: "white",
              padding: "6px 8px",
              borderRadius: 8,
              fontSize: 12,
            }}
          >
            <strong>{currentSimulation.toUpperCase()}</strong>
          </div>
        </div>

        {loading && (
          <div
            style={{ color: "white", textAlign: "center", marginTop: "20%" }}
          >
            Carregando pontos...
          </div>
        )}
        {error && (
          <div style={{ color: "red", textAlign: "center", marginTop: "20%" }}>
            Erro: {error}
          </div>
        )}

        <Canvas
          // chave composta para forçar remount ao reiniciar (runId muda)
          key={`${runId}-${currentSimulation}`}
          camera={{
            position: cameraSettings[currentSimulation].position,
            fov: cameraSettings[currentSimulation].fov,
          }}
        >
          <Stars
            radius={currentSimulation === "chuveiro" ? 400 : 100}
            depth={currentSimulation === "chuveiro" ? 200 : 50}
            count={currentSimulation === "chuveiro" ? 4000 : 2000}
            factor={4}
            saturation={0}
            fade
          />

          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />

          {currentSimulation === "chuveiro" ? (
            <AtmosphericShowerSimulation resetKey={runId} />
          ) : (
            points && points.length > 0 && <ParticleAnimation points={points} />
          )}

          <OrbitControls
            minDistance={cameraSettings[currentSimulation].minDistance}
            maxDistance={cameraSettings[currentSimulation].maxDistance}
          />
        </Canvas>

        {/* Legenda do chuveiro */}
        {currentSimulation === "chuveiro" && (
          <div
            style={{
              position: "absolute",
              bottom: 80,
              left: 20,
              background: "rgba(0,0,0,0.65)",
              padding: "10px 12px",
              borderRadius: "8px",
              color: "white",
              fontSize: "13px",
              zIndex: 1500,
              lineHeight: "1.4",
              maxWidth: "320px",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 6 }}>
              Legenda — Chuveiro Atmosférico
            </div>
            <div>
              <span style={{ color: "#ff4444", fontWeight: 600 }}>●</span>{" "}
              Primária / Hadrônica
            </div>
            <div>
              <span style={{ color: "#3399ff", fontWeight: 600 }}>●</span>{" "}
              Cascata Eletromagnética (π⁰ → γγ)
            </div>
            <div>
              <span style={{ color: "#33ff77", fontWeight: 600 }}>●</span>{" "}
              Muônica (μ)
            </div>
            <div style={{ marginTop: 8, fontSize: 12, opacity: 0.85 }}>
              Modelo estocástico simplificado para visualização pedagógica.
            </div>
          </div>
        )}

        {/* Legenda do campo magnético uniforme */}
        {currentSimulation === "uniforme" && (
          <div
            style={{
              position: "absolute",
              bottom: 80,
              left: 20,
              background: "rgba(0,0,0,0.65)",
              padding: "10px 12px",
              borderRadius: "8px",
              color: "white",
              fontSize: "13px",
              zIndex: 1500,
              lineHeight: "1.4",
              maxWidth: "320px",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 6 }}>
              Legenda — Campo Magnético Uniforme
            </div>
            <div style={{ fontSize: 13 }}>
              Simulação pedagógica de uma <strong>partícula carregada</strong>{" "}
              propagando num campo magnético uniforme. Observe trajetórias
              curvas típicas (movimento circular/ helicoidal) segundo a força de
              Lorentz — objetivo: visualizar comportamento qualitativo.
            </div>
          </div>
        )}

        {/* Legenda do campo magnético variável */}
        {currentSimulation === "variavel" && (
          <div
            style={{
              position: "absolute",
              bottom: 80,
              left: 20,
              background: "rgba(0,0,0,0.65)",
              padding: "10px 12px",
              borderRadius: "8px",
              color: "white",
              fontSize: "13px",
              zIndex: 1500,
              lineHeight: "1.4",
              maxWidth: "320px",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 6 }}>
              Legenda — Campo Magnético Variável
            </div>
            <div style={{ fontSize: 13 }}>
              Simulação pedagógica de uma <strong>partícula carregada</strong>{" "}
              em um campo magnético que varia no espaço — trajetórias podem
              ficar complexas e não- periódicas; uso didático para mostrar
              efeito da variação espacial do campo.
            </div>
          </div>
        )}

        {/* Controles / dicas */}
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "rgba(0,0,0,0.55)",
            padding: "8px 10px",
            borderRadius: "8px",
            color: "white",
            fontSize: "12px",
            zIndex: 2000,
            textAlign: "right",
            lineHeight: "1.35",
          }}
        >
          <div>
            <strong>Controles da câmera:</strong>
          </div>
          <div>• Scroll: zoom</div>
          <div>• Botão esquerdo: mover</div>
          <div>• Botão direito: girar</div>
        </div>
      </div>
    </div>
  );
}
