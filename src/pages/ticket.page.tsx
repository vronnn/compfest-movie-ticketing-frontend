import { useQuery } from '@tanstack/react-query';
import { FiChevronRight } from 'react-icons/fi';

import TicketSection from '@/components/carousel/TicketSection';
import WithAuth from '@/components/hoc/WithAuth';
import Layout from '@/components/layout/Layout';
import BaseLink from '@/components/links/BaseLink';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import { ApiReturn } from '@/types/api';
import { role } from '@/types/auth';
import { TicketProps } from '@/types/ticket';

export default WithAuth(TicketPage, role);

function TicketPage() {
  const url = `${process.env.NEXT_PUBLIC_API_PRODUCTION_URL}/ticket`;
  const { data: ticketData } = useQuery<ApiReturn<TicketProps[]>>([url]);
  return (
    <Layout>
      <SEO title='TMDB | Ticketing' />
      <main className='bg-base-dark text-white pt-16 pb-8'>
        <div className='flex items-center self-start px-20'>
          <BaseLink href='/' className='px-1.5'>
            <Typography variant='b3' className='text-base-pre'>
              home
            </Typography>
          </BaseLink>
          <FiChevronRight />
          <BaseLink href='' className='px-1.5'>
            <Typography variant='b3'>ticket</Typography>
          </BaseLink>
        </div>
        <section className='min-h-screen flex flex-col items-center pt-16 justify-start px-16 relative'>
          {ticketData && <TicketSection tickets={ticketData?.data} />}
        </section>
      </main>
    </Layout>
  );
}
