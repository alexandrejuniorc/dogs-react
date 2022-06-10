import '../../scss/UserStatsGraphs.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

export const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setGraph(graphData);
    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b),
    );

    console.log(data);
  }, [data]);

  return (
    <section className={'graph anime-left'}>
      <div className="graphItem totalGraph">
        <p>Acessos: {total}</p>
      </div>
      <div className="graphItem ">
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </div>
      <div className="graphItem ">
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};
