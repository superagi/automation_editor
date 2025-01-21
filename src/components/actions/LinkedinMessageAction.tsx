export function LinkedinMessageAction() {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">LinkedIn Message Settings</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Account</label>
          <select className="w-full bg-gray-700 rounded p-2">
            <option>Select LinkedIn account</option>
          </select>
        </div>
      </div>
    </div>
  )
}
