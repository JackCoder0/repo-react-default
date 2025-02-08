interface TechProps {
  name: string
  file: string
}

export function Tech({ name, file }: TechProps) {
  return (
    <div className="flex items-center gap-3">
      <img src={file} alt={name} className="h-16 w-16" />
      <h1 className="text-center text-6xl font-bold">{name}</h1>
    </div>
  )
}
