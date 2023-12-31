import Head from 'next/head';
import { Card, Logo, Avatar, Button, Icon } from '@tourlane/fusion-you';
import {
  Container,
  f,
  Grid,
  Box,
  Divider,
  Flex,
  HTMLFProps,
} from 'fusion-engine/jsx';
import { FC } from 'react';
import { Carousel, Map } from '@/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container maxW='breakpoint-xl'>
        <f.header display={'flex'} justifyContent={'space-between'} py={'4'}>
          <Logo w='150px' />
          <Avatar.Root>
            <Avatar.Image
              src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
              alt='Colm Tuite'
            />
            <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
          </Avatar.Root>
        </f.header>
        <Grid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          <Box>
            <Card.Root>
              <Card.Header flexDirection={'column'} gap={0}>
                <f.h1 textStyle={'display.sm'}>Title</f.h1>
                <f.p textStyle={'label.md'} color='on.surface.variant'>
                  Country
                </f.p>
              </Card.Header>
              <Divider />
              <Card.Body>
                <Flex>
                  <CardBodyItem title={'Duration'} w='full'>
                    16 days
                  </CardBodyItem>
                  <CardBodyItem title={'Stops'} w='full'>
                    12ys
                  </CardBodyItem>
                </Flex>
                <CardBodyItem title={'Intersts'}>texts</CardBodyItem>
                <CardBodyItem title={'Includes'}>extra more texts</CardBodyItem>
              </Card.Body>
              <Card.Footer justifyContent={'space-between'}>
                <f.p textStyle={'label.md'} color='on.surface.variant'>
                  from 1000€ per person
                </f.p>
                <Flex gap={4}>
                  <Button variant='tonal'>
                    <Icon icon='material-symbols:30fps-sharp' />
                    Edit
                  </Button>
                  <Button>Book</Button>
                </Flex>
              </Card.Footer>
            </Card.Root>
          </Box>
          <Box
            bgColor={'surface.container'}
            borderWidth={1}
            borderColor={'outline'}
            rounded='3xl'
            p={8}
          >
            <Carousel />
          </Box>
          <Box>
            <Map />
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export type CardBodyItemProps = HTMLFProps<'div'> & {
  title: string;
};

const CardBodyItem: FC<CardBodyItemProps> = ({ title, children, ...props }) => {
  return (
    <f.div {...props}>
      <f.p textStyle={'label.md'} color='on.surface.variant'>
        {title}
      </f.p>
      <f.p textStyle={'body.lg'} color='on.surface'>
        {children}
      </f.p>
    </f.div>
  );
};
