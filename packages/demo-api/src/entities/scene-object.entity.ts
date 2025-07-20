export class Vector3 {
  constructor(public x: number, public y: number, public z: number) {}
}

export class SceneObject {
  constructor(
    public readonly id: string,
    public type: 'cube' | 'sphere',
    public position: Vector3,
    public scale: Vector3,
    public color: string
  ) {}

  moveTo(newPosition: Vector3): void {
    this.position = newPosition;
  }

  resize(newScale: Vector3): void {
    this.scale = newScale;
  }
}
