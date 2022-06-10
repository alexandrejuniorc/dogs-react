import { Head } from '../helper/Head';
import { useFetch } from '../../hooks/useFetch';
import { lazy, Suspense, useEffect } from 'react';
import { STATS_GET } from '../../api/Api';
import { Loading } from '../helper/Loading';
import { Error } from '../helper/Error';
import { UserStatsGraphs } from './UserStatsGraphs';

export const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const getData = async () => {
      const { url, options } = STATS_GET();
      await request(url, options);
    };
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
};
