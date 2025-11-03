import { ReactThreeFiber } from '@react-three/fiber';

export {};

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  import { Material, BufferGeometry } from 'three';
  export class MeshLineGeometry extends BufferGeometry {
    setPoints(points: THREE.Vector3[]): void;
  }
  export class MeshLineMaterial extends Material {
    constructor(parameters?: any);
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: ReactThreeFiber.Object3DNode<
        import('meshline').MeshLineGeometry,
        typeof import('meshline').MeshLineGeometry
      >;
      meshLineMaterial: ReactThreeFiber.Object3DNode<
        import('meshline').MeshLineMaterial,
        typeof import('meshline').MeshLineMaterial
      >;
    }
  }
}
