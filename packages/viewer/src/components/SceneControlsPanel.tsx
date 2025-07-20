export const SceneControlsPanel = ({ onAdd }: { onAdd: () => void }) => {
  return (
    <div className="absolute z-10 p-4">
      <h1 className="text-2xl font-bold text-white">Scene Objects</h1>
      <button
        onClick={onAdd}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Object
      </button>
    </div>
  );
};
