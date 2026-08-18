export default function Button({children, href, onClick, className = ''}){
  const base = `btn ${className}`.trim()
  if(href) return <a href={href} className={base}>{children}</a>
  return <button onClick={onClick} className={base}>{children}</button>
}
