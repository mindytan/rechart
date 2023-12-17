import { Cell, Pie, PieChart } from "recharts"

const Chart = () => {
  let data = [
      { name: 'Loan', value: 300 },
      { name: 'Cash CPF', value: 100 },
      { name: 'Min Cash', value: 80 }
    ]
    
    const COLORS = ['#0081a7', '#f28482', '#f6bd60']

    const renderCustomizedLabel = ({ cx = 115, cy = 115 }) => {
      return (
        <text
          x={cx}
          y={cy}
          textAnchor='middle'
        >
          <tspan
            x={cx}
            dy={-30}
            style={{
              fontFamily: 'Plus Jakarta Sans, Sans Serif',
              fontSize: '14px'
            }}
            fill='rgba(38, 50, 55)'
            fillOpacity='0.6'
          >
            Explore options for an
          </tspan>
          <tspan
            x={cx}
            dy={25}
            style={{
              fontFamily: 'Plus Jakarta Sans, Sans Serif',
              fontSize: '14px'
            }}
            fill='rgba(38, 50, 55)'
            fillOpacity='0.6'
          >
            Apartment
          </tspan>
          <tspan
            x={cx}
            dy={25}
            style={{
              fontFamily: 'Plus Jakarta Sans, Sans Serif',
              fontSize: '14px'
            }}
            fill='rgba(38, 50, 55)'
            fillOpacity='0.6'
          >
            starting at
          </tspan>
          <tspan
            x={cx}
            dy={35}
            style={{
              fontFamily: 'Plus Jakarta Sans, Sans Serif',
              fontSize: '24px'
            }}
            fill='rgba(38, 50, 55)'
          >
            $400,000
          </tspan>
        </text>
      )
    }
    return (
      <PieChart
        width={230}
        height={230}
      >
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          innerRadius={107}
          outerRadius={115}
          startAngle={90}
          endAngle={450}
          paddingAngle={0}
          dataKey='value'
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              style={{ outline: 'none' }}
            />
          ))}
        </Pie>
      </PieChart>
    )
}

export default Chart