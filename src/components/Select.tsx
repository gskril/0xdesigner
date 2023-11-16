type SelectProps = {
  id: string
  name: string
  options: SelectOption[]
  onChange: (value: string) => void
}

export type SelectOption = {
  value: string
  label: string
}

export function Select({ id, name, options, onChange }: SelectProps) {
  return (
    <div className="flex items-center space-x-2">
      <label className="text-gray-600" htmlFor={id}>
        {name}:
      </label>
      <select
        className="rounded-md border-gray-300 text-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
        id={id}
        name={id}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
