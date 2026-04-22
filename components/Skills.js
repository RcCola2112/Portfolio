const skillCategories = [
  {title:'Frontend', skills:['React','Tailwind','HTML','CSS','JavaScript']},
  {title:'Backend', skills:['PHP','Node.js']},
  {title:'Database', skills:['MySQL','PostgreSQL']},
  {title:'Tools', skills:['Git','Vercel','Firebase','Supabase']}
]

function Progress({label}){
  return (
    <div className="w-full">
      <div className="flex justify-between text-sm"><span>{label}</span><span className="text-muted">●●●</span></div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded mt-2">
        <div className="h-2 bg-primary rounded" style={{width: Math.floor(60 + Math.random()*35) + '%'}}></div>
      </div>
    </div>
  )
}

export default function Skills(){
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {skillCategories.map(cat=> (
            <div key={cat.title} className="p-4 border rounded">
              <h3 className="font-semibold mb-3">{cat.title}</h3>
              <div className="space-y-3">
                {cat.skills.map(s=> <Progress key={s} label={s} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
