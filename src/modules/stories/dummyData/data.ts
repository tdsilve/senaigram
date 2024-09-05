import avatar1 from "@/modules/storiesAux/assets/avatars/avatar1.jpg";
import avatar2 from "@/modules/storiesAux/assets/avatars/avatar2.jpg";
import avatar3 from "@/modules/storiesAux/assets/avatars/avatar3.jpg";
import story1 from "@/modules/storiesAux/assets/stories/story1.jpg";
import story2 from "@/modules/storiesAux/assets/stories/story2.jpg";
import story3 from "@/modules/storiesAux/assets/stories/story3.jpg";
import story4 from "@/modules/storiesAux/assets/stories/story4.jpg";
import elder1 from "@/modules/storiesAux/assets/stories/elder1.jpg";
import elder2 from "@/modules/storiesAux/assets/stories/elder2.jpg";
import elder3 from "@/modules/storiesAux/assets/stories/elder3.jpg";
import vacation1 from "@/modules/storiesAux/assets/stories/vacation1.jpg";
import vacation2 from "@/modules/storiesAux/assets/stories/vacation2.jpg";
import vacation3 from "@/modules/storiesAux/assets/stories/vacation3.jpg";
import vacation4 from "@/modules/storiesAux/assets/stories/vacation4.jpg";
import vacation5 from "@/modules/storiesAux/assets/stories/vacation5.jpg";
import { Story } from "../models/type";

export type Users = {
  id: number;
  authorId: number;
  name: string;
  avatar: string;
  stories: Story[];
};

export const USERS: Users[] = [
  {
    id: 0,
    name: "palmer_stephen",
    avatar: avatar1.src,
    authorId: 0,
    stories: [
      { id: 0, content: story1.src },
      { id: 1, content: elder2.src },
      { id: 2, content: story3.src },
      { id: 3, content: story4.src },
    ],
  },
  {
    id: 1,
    name: "john.erika",
    avatar: avatar2.src,
    authorId: 1,
    stories: [
      { id: 0, content: elder1.src },
      { id: 1, content: elder2.src },
      { id: 2, content: elder3.src },
    ],
  },
  {
    id: 2,
    name: "wane213",
    authorId: 2,
    avatar: avatar3.src,
    stories: [
      { id: 0, content: vacation1.src },
      { id: 1, content: vacation2.src },
      { id: 2, content: vacation3.src },
      { id: 3, content: vacation4.src },
      { id: 4, content: vacation5.src },
    ],
  },
  {
    id: 3,
    name: "john.erika",
    avatar: avatar2.src,
    authorId: 3,
    stories: [
      { id: 0, content: vacation1.src },
      { id: 1, content: vacation2.src },
      { id: 2, content: vacation3.src },
      { id: 3, content: vacation4.src },
      { id: 4, content: vacation5.src },
    ],
  },
  {
    id: 4,
    name: "wane213",
    avatar: avatar3.src,
    authorId: 4,
    stories: [
      { id: 0, content: vacation1.src },
      { id: 1, content: vacation2.src },
      { id: 2, content: vacation3.src },
      { id: 3, content: vacation4.src },
      { id: 4, content: vacation5.src },
    ],
  },
  {
    id: 5,
    name: "wane213",
    avatar: avatar3.src,
    authorId: 5,
    stories: [
      { id: 0, content: vacation1.src },
      { id: 1, content: vacation2.src },
      { id: 2, content: vacation3.src },
      { id: 3, content: vacation4.src },
      { id: 4, content: vacation5.src },
    ],
  },
  {
    id: 6,
    name: "wane213",
    avatar: avatar3.src,
    authorId: 6,
    stories: [
      { id: 0, content: elder1.src },
      { id: 1, content: elder2.src },
      { id: 2, content: elder3.src },
    ],
  },
  {
    id: 7,
    name: "wane213",
    avatar: avatar3.src,
    authorId: 7,
    stories: [
      { id: 0, content: elder1.src },
      { id: 1, content: elder2.src },
      { id: 2, content: elder3.src },
    ],
  },
  {
    id: 8,
    name: "wane213",
    avatar: avatar3.src,
    authorId: 8,
    stories: [
      { id: 0, content: vacation1.src },
      { id: 1, content: vacation2.src },
      { id: 2, content: vacation3.src },
      { id: 3, content: vacation4.src },
      { id: 4, content: vacation5.src },
    ],
  },
  {
    id: 9,
    name: "palmer_stephen",
    avatar: avatar1.src,
    authorId: 9,
    stories: [
      { id: 0, content: elder1.src },
      { id: 1, content: elder2.src },
      { id: 2, content: elder3.src },
    ],
  },
  {
    id: 10,
    name: "john.erika",
    avatar: avatar2.src,
    authorId: 10,
    stories: [{ id: 0, content: elder1.src }],
  },
];
