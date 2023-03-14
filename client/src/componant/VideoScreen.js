import {
  Box,
  Flex,
  Text,
  Player,
  GrVolume,
  GiExitDoor,
  IconButton,
  Spacer,
  Button,
  Heading,
  CardFooter,
  Stack,
  StackDivider,
  CardHeader,
  Avatar,
  Input,CardBody, Image, Card,VStack,
} from "@chakra-ui/react";
import { BiLike, BiChat, BiShare, BiDotsVerticalRounded } from "react-icons/bi";
import React from "react";
import ReactPlayer from "react-player";
import Navigation from "./Navigation";
const VideoScreen = () => {
  return (
    <div>
      <Box background={"#EDF2F7"}>
        <Navigation />
        <Box m={"1%"}>
          <Flex color="white" mx={"2%"}>
            <Box flex="2">
              <Box pos="relative" w="100%" ms={"2%"}>
                <ReactPlayer
                  controls
                  width={"96%"}
                  height={"68vh"}
                  url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                />
              </Box>
              <Box>
                <Box mt={"1%"} ms={"2%"} mb={"1%"}>
                  <Heading
                    as="h4"
                    size="md"
                    color={"black"}
                    fontFamily={"revert"}
                    fontWeight={"medium"}
                  >
                    India WINS at Oscars Awards! | How Nominations and Voting
                    Work? | Dhruv Rathee
                  </Heading>
                </Box>
                <Box ms={"1%"} color={"black"} borderBottom={"1px solid gray"}>
                  <Flex>
                    <Box p="4">
                      <Flex spacing="4">
                        <Flex
                          flex="1"
                          gap="4"
                          alignItems="center"
                          flexWrap="wrap"
                        >
                          <Avatar
                            name="Segun Adebayo"
                            src="https://bit.ly/sage-adebayo"
                          />

                          <Box>
                            <Heading size="sm">Segun Adebayo</Heading>
                            <Text>Creator, Chakra UI</Text>
                          </Box>
                        </Flex>
                      </Flex>
                    </Box>
                    <Spacer />
                    <Box p="4" me={"2%"}>
                      <Button flex={1} variant={"ghost"} leftIcon={<BiLike />}>
                        Like 485
                      </Button>
                      <Button flex={1} variant={"ghost"} leftIcon={<BiChat />}>
                        Comment
                      </Button>
                      <Button flex={1} variant={"ghost"} leftIcon={<BiShare />}>
                        Share
                      </Button>
                    </Box>
                  </Flex>
                </Box>
              </Box>
              <Box ms={"2%"} color={"black"}>
                <Text>comments</Text>
                <Flex minWidth="max-content" alignItems="center" gap="2">
                  <Box p="2" w={"90%"}>
                    <Input
                      borderBottom={"1px solid gray"}
                      placeholder="add your comment"
                    />
                  </Box>
                  <Button colorScheme="teal" me={"2%"}>
                    comment
                  </Button>
                </Flex>
                <Box>
                  <Stack divider={<StackDivider />} spacing="4">
                    <Box>
                      <Flex>
                        <Box m={"1%"}>
                          <Avatar
                            name="Dan Abrahmov"
                            src="https://bit.ly/dan-abramov"
                          />
                        </Box>
                        <Box m={"1%"}>
                          <Heading size="xs" textTransform="uppercase">
                            Segun Adebayo
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            View a summary of all your clients over the last
                            month.
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex>
                        <Box m={"1%"}>
                          <Avatar
                            name="Dan Abrahmov"
                            src="https://bit.ly/dan-abramov"
                          />
                        </Box>
                        <Box m={"1%"}>
                          <Heading size="xs" textTransform="uppercase">
                            Summary
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            View a summary of all your clients over the last
                            month.
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex>
                        <Box m={"1%"}>
                          <Avatar
                            name="Dan Abrahmov"
                            src="https://bit.ly/dan-abramov"
                          />
                        </Box>
                        <Box m={"1%"}>
                          <Heading size="xs" textTransform="uppercase">
                            Summary
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            View a summary of all your clients over the last
                            month.
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex>
                        <Box m={"1%"}>
                          <Avatar
                            name="Dan Abrahmov"
                            src="https://bit.ly/dan-abramov"
                          />
                        </Box>
                        <Box m={"1%"}>
                          <Heading size="xs" textTransform="uppercase">
                            Summary
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            View a summary of all your clients over the last
                            month.
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex>
                        <Box m={"1%"}>
                          <Avatar
                            name="Dan Abrahmov"
                            src="https://bit.ly/dan-abramov"
                          />
                        </Box>
                        <Box m={"1%"}>
                          <Heading size="xs" textTransform="uppercase">
                            Summary
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            View a summary of all your clients over the last
                            month.
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex>
                        <Box m={"1%"}>
                          <Avatar
                            name="Dan Abrahmov"
                            src="https://bit.ly/dan-abramov"
                          />
                        </Box>
                        <Box m={"1%"}>
                          <Heading size="xs" textTransform="uppercase">
                            Summary
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            View a summary of all your clients over the last
                            month.
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Box>
            <Box flex="1">
                <Box mb={'1%'}>
                <Flex border={'0.5px solid #E2E8F0'} borderRadius={'4px'}>
                        <Box w={'45%'} background={'lightblue'}>
                            <Image src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt='Dan Abramov' />
                        </Box>
                        <Box w={'55%'} color={'black'} m={'2%'}>
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>India WINS at Oscars Awards! | How Nominations and Voting
                                        Work? | Dhruv Rathee</Text>
                                <Text color={'gray.500'}>sanjay singh</Text>
                                <Text color={'gray.500'}>Feb 08, 2021 · 500 views</Text>
                            </Stack>
                        </Box>
                </Flex>
                </Box>
                <Box mb={'1%'}>
                <Flex border={'0.5px solid #E2E8F0'} borderRadius={'4px'}>
                        <Box w={'45%'} background={'lightblue'}>
                            <Image src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt='Dan Abramov' />
                        </Box>
                        <Box w={'55%'} color={'black'} m={'2%'}>
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>India WINS at Oscars Awards! | How Nominations and Voting
                                        Work? | Dhruv Rathee</Text>
                                <Text color={'gray.500'}>sanjay singh</Text>
                                <Text color={'gray.500'}>Feb 08, 2021 · 500 views</Text>
                            </Stack>
                        </Box>
                </Flex>
                </Box>
                <Box mb={'1%'}>
                <Flex border={'0.5px solid #E2E8F0'} borderRadius={'4px'}>
                        <Box w={'45%'} background={'lightblue'}>
                            <Image src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt='Dan Abramov' />
                        </Box>
                        <Box w={'55%'} color={'black'} m={'2%'}>
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>India WINS at Oscars Awards! | How Nominations and Voting
                                        Work? | Dhruv Rathee</Text>
                                <Text color={'gray.500'}>sanjay singh</Text>
                                <Text color={'gray.500'}>Feb 08, 2021 · 500 views</Text>
                            </Stack>
                        </Box>
                </Flex>
                </Box>
                <Box mb={'1%'}>
                <Flex border={'0.5px solid #E2E8F0'} borderRadius={'4px'}>
                        <Box w={'45%'} background={'lightblue'}>
                            <Image src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt='Dan Abramov' />
                        </Box>
                        <Box w={'55%'} color={'black'} m={'2%'}>
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>India WINS at Oscars Awards! | How Nominations and Voting
                                        Work? | Dhruv Rathee</Text>
                                <Text color={'gray.500'}>sanjay singh</Text>
                                <Text color={'gray.500'}>Feb 08, 2021 · 500 views</Text>
                            </Stack>
                        </Box>
                </Flex>
                </Box>
                <Box mb={'1%'}>
                <Flex border={'0.5px solid #E2E8F0'} borderRadius={'4px'}>
                        <Box w={'45%'} background={'lightblue'}>
                            <Image src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt='Dan Abramov' />
                        </Box>
                        <Box w={'55%'} color={'black'} m={'2%'}>
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>India WINS at Oscars Awards! | How Nominations and Voting
                                        Work? | Dhruv Rathee</Text>
                                <Text color={'gray.500'}>sanjay singh</Text>
                                <Text color={'gray.500'}>Feb 08, 2021 · 500 views</Text>
                            </Stack>
                        </Box>
                </Flex>
                </Box>
                <Box mb={'1%'}>
                <Flex border={'0.5px solid #E2E8F0'} borderRadius={'4px'}>
                        <Box w={'45%'} background={'lightblue'}>
                            <Image src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt='Dan Abramov' />
                        </Box>
                        <Box w={'55%'} color={'black'} m={'2%'}>
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>India WINS at Oscars Awards! | How Nominations and Voting
                                        Work? | Dhruv Rathee</Text>
                                <Text color={'gray.500'}>sanjay singh</Text>
                                <Text color={'gray.500'}>Feb 08, 2021 · 500 views</Text>
                            </Stack>
                        </Box>
                </Flex>
                </Box>
                <Box mb={'1%'}>
                <Flex border={'0.5px solid #E2E8F0'} borderRadius={'4px'}>
                        <Box w={'45%'} background={'lightblue'}>
                            <Image src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt='Dan Abramov' />
                        </Box>
                        <Box w={'55%'} color={'black'} m={'2%'}>
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>India WINS at Oscars Awards! | How Nominations and Voting
                                        Work? | Dhruv Rathee</Text>
                                <Text color={'gray.500'}>sanjay singh</Text>
                                <Text color={'gray.500'}>Feb 08, 2021 · 500 views</Text>
                            </Stack>
                        </Box>
                </Flex>
                </Box>
                <Box mb={'1%'}>
                <Flex border={'0.5px solid #E2E8F0'} borderRadius={'4px'}>
                        <Box w={'45%'} background={'lightblue'}>
                            <Image src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt='Dan Abramov' />
                        </Box>
                        <Box w={'55%'} color={'black'} m={'2%'}>
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>India WINS at Oscars Awards! | How Nominations and Voting
                                        Work? | Dhruv Rathee</Text>
                                <Text color={'gray.500'}>sanjay singh</Text>
                                <Text color={'gray.500'}>Feb 08, 2021 · 500 views</Text>
                            </Stack>
                        </Box>
                </Flex>
                </Box>
                <Box mb={'1%'}>
                <Flex border={'0.5px solid #E2E8F0'} borderRadius={'4px'}>
                        <Box w={'45%'} background={'lightblue'}>
                            <Image src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt='Dan Abramov' />
                        </Box>
                        <Box w={'55%'} color={'black'} m={'2%'}>
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>India WINS at Oscars Awards! | How Nominations and Voting
                                        Work? | Dhruv Rathee</Text>
                                <Text color={'gray.500'}>sanjay singh</Text>
                                <Text color={'gray.500'}>Feb 08, 2021 · 500 views</Text>
                            </Stack>
                        </Box>
                </Flex>
                </Box>
                <Box mb={'1%'}>
                <Flex border={'0.5px solid #E2E8F0'} borderRadius={'4px'}>
                        <Box w={'45%'} background={'lightblue'}>
                            <Image src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt='Dan Abramov' />
                        </Box>
                        <Box w={'55%'} color={'black'} m={'2%'}>
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>India WINS at Oscars Awards! | How Nominations and Voting
                                        Work? | Dhruv Rathee</Text>
                                <Text color={'gray.500'}>sanjay singh</Text>
                                <Text color={'gray.500'}>Feb 08, 2021 · 500 views</Text>
                            </Stack>
                        </Box>
                </Flex>
                </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default VideoScreen;
