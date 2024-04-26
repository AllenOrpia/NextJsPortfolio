import React from 'react';
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps ={
    message: string;
    senderEmail: string
}

export const ContactFormEmail = ({
    message,
    senderEmail
}: ContactFormEmailProps) => {
  return (
    <Html>
        <Head />
        <Preview>New Message from portfolio site</Preview>
        <Tailwind>
            <Body className='bg-gray-100 text-black'>
                <Container>
                    <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
                        <Heading className='leading-tight'>You received the following message from your personal portfolio site</Heading>
                        <Text>{message}</Text>
                        <Hr/>
                        <Text>Message from: {senderEmail}</Text>
                    </Section>

                </Container>
            </Body>

        </Tailwind>
    </Html>
  )
}
