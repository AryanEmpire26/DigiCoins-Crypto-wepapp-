import React from 'react'
import {  VStack, Image, Heading, Text } from '@chakra-ui/react'
const Exchangecards = ({ name, img, rank, url }) => {
    return (<a href={url} target='blank'>
        <VStack w={'52'} shadow={'lg'} p={'8'} borderRadius={'lg'} transition={'all 0.3s'} m={'4'}
            css={{
                "&:hover": {
                    transform: 'scale(1.1)'
                }
            }}>
            <Image w={'10'} h={'10'} objectFit={'contain'}
                src={img}
            />

            <Heading size={'md'} noOfLines={1}> {rank}</Heading>
            <Text noOfLines={1}>{name}</Text>
        </VStack>
    </a>)
}

export default Exchangecards