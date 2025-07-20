import { useSceneObjects } from '../hooks/useSceneObjects';
import { SceneCanvas } from '../components/SceneCanvas';

export function App() {
  const { objects, addObject, deleteObject } = useSceneObjects();

  return (
    <div className="flex h-screen w-screen bg-gray-900 text-white">
      <aside className="w-64 bg-gray-800 p-4 flex flex-col gap-4 border-r border-gray-700">
        <header>
          <h1 className="text-xl font-bold mb-4">Scene Objects</h1>
          <button
            onClick={addObject}
            className="w-full bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded"
          >
            + Add Object
          </button>
        </header>

        <ul className="flex-1 overflow-y-auto mt-2 space-y-2">
          {objects.map((obj) => (
            <li
              key={obj.id}
              className="p-2 rounded bg-gray-700 border border-gray-600"
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold">{obj.type}</div>
                  <div className="text-xs text-gray-300">
                    {obj.position.x.toFixed(1)}, {obj.position.y.toFixed(1)},{' '}
                    {obj.position.z.toFixed(1)}
                  </div>
                  <div
                    className="w-4 h-4 rounded-full mt-1"
                    style={{ backgroundColor: obj.color }}
                  />
                </div>
                <button
                  onClick={() => deleteObject(obj.id)}
                  className="text-sm text-red-400 hover:text-red-600 transition"
                  title="Delete object"
                >
                  🗑
                </button>
              </div>
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 relative">
        <SceneCanvas objects={objects} />
      </main>
    </div>
  );
}

export default App;
