import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Colors } from './constants';
import './Chart.css';

function Chart({ 
  title, 
  data, 
  color = Colors.PURPLE, 
  activeColor = Colors.GREEN, 
  width = 600, 
  height = 600, 
  yAxisWidth = 120, 
  onBarClick = null, 
  activeBar = 0 
}) {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <p className='tooltip'>{`${label} : ${payload[0].value}`}</p>
      );
    }

    return null;
  };

  let barElm = <Bar dataKey="instances" fill={color} barSize={20} minPointSize={5} />

  if (onBarClick) {
    barElm = (
      <Bar dataKey="instances" fill={color} barSize={20} minPointSize={5} onClick={(data, i) => onBarClick(i)}>
        {data.map((entry, index) => (
          <Cell cursor="pointer" fill={index === activeBar ? activeColor : color} key={`cell-${index}`} />
        ))}
      </Bar>
    )
  }

  return (
    <div>
      <h2>{title}</h2>
      <div className="chart-container">
        <BarChart
          layout="vertical"
          width={width}
          height={height}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" padding={{ left: 10 }} domain={[0, 'dataMax']}/>
          <YAxis dataKey="name" type="category" width={yAxisWidth} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {barElm}
        </BarChart>
      </div>
    </div>
  );
}

export default Chart;
