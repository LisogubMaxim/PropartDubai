import "./blockContainer.scss"

export default function BlockContainer({children,className}) {
  return (
    <div className={`blockContainer ${className}`}>{children}</div>
  )
}
