import { Box, Container, Heading } from "@chakra-ui/react"

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
            </Box>
        </Container>
        
    )
} 

export default Page