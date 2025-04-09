import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "A4xqKLBtBsfBDCKsS-R140KFekHwHQTOMZcfEHxMfA8",
});

export async function fetchImageByTopic(topic) {
  try {
    const result = await unsplash.photos.getRandom({
      query: topic,
      count: 1,
    });

    if (result.errors) {
      console.error("Error fetching image:", result.errors[0]);
      return null;
    }
    return result.response[0];
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
}