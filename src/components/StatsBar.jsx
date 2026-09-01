import Reveal from './Reveal'

const stats = [
  {
    value: '2023',
    label: 'Incorporated in Illinois',
  },
  {
    value: 'AI + Cloud',
    label: 'What we ship on',
  },
  {
    value: '100%',
    label: 'Tested, production-ready code',
  },
]

function StatsBar() {
  return (
    <section className="stats" aria-label="Company highlights">
      <div className="container">
        <Reveal direction="scale">
          <div className="stats__card card-3d">
            {stats.map((stat) => (
              <div key={stat.value} className="stats__item">
                <span className="stats__value stat-3d">{stat.value}</span>
                <span className="stats__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default StatsBar
