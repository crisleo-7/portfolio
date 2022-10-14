import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'abtr0ego',
    dataset: 'production',
    apiVersion: '2022-03-09',
    useCdn: true,
    token: 'skHsdLS7cmYZ1eK1LzTrDz9KFwb456gZlGBcTGIaLGswzzSQKE6lN5YprQiT8503LGmpj2S2tDK1q4KlF1loi1HtPPzj7m232lqSPxjaqxodZ8s2Jqw0bgMIVsLBe5BmQCpnp75Lv0n4NILLuLGx4MMBUfXXjx9PyB4QKEyFADUcQaIVYnlq',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);