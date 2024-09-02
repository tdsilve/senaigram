import { Config } from "../types/type"
import { STORY_TIMING } from "../constant"

export const getCurrentStoriesInitialConfig = (currentStories: string[], userId: number): Config => {
    return {
        userId,
        currentStories,
        currentStory: currentStories[0],
        storiesDispatch: () => undefined,
        loading: false,
        timing: STORY_TIMING,
        startTiming: 0,
    }
}