export function EmailAction() {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Email Settings</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-1">From</label>
          <input type="email" className="w-full bg-gray-700 rounded p-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">Template</label>
          <select className="w-full bg-gray-700 rounded p-2">
            <option>Select template</option>
          </select>
        </div>
      </div>
    </div>
  )
}
