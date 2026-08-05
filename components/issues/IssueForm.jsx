import Link from "next/link";

export default function IssueForm({submitLabel = "Create Issue",defaultValues = {},action,}) {
  return (
    <form action={action} className="space-y-6 p-6">
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700"> Title </label>

        <input type="text" name="title" defaultValue={defaultValues.title || ""} placeholder="Enter issue title"
          className="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">Description</label>
        <textarea name="description" rows={5} defaultValue={defaultValues.description || ""} placeholder="Describe the issue..."
          className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"/>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Status</label>

          <select name="status" defaultValue={defaultValues.status || "Open"} className="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
            <option>Open</option>
            <option>In_Progress</option>
            <option>Closed</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Priority</label>

          <select name="priority" defaultValue={defaultValues.priority || "Medium"} className="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Assignee</label>

          <input type="text" name="assignee" defaultValue={defaultValues.assignee || ""} placeholder="Assign to..."
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"/>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <button type="submit" className="rounded-lg bg-blue-600 px-5 py-2.5 text-white transition hover:bg-blue-700">
          {submitLabel}
        </button>

        <Link href="/issues" className="rounded-lg border border-gray-300 px-5 py-2.5 text-center transition hover:bg-gray-100">
          Cancel
        </Link>
      </div>
    </form>
  );
}