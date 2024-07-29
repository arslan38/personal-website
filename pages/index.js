import { Box, Container, Heading, Image } from "@chakra-ui/react"

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="lightgray" p={3} mb={6} align="center">
                Hello, I&apos;m a full-stack developer based in Istanbul, Turkey.
            </Box>

            <Box display={{md:"flex"}}> 
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Huzeyfe Burak Arslan
                    </Heading>
                    <p>Digital Craftzman ( Developer / Designer )</p>
                </Box>

                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <Image
                            src="/images/burak.jpeg"
                            alt="Profile image"
                            width="100px"
                            height="100px"
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
        
    )
} 

export default Page