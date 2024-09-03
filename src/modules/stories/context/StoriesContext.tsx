"use client";
import React from 'react'
import { StoriesContexType } from '../models/type';
import { getInitialStoriesContextState } from '../helpers/getInitialStoriesContextState';
export const StoriesContext = React.createContext<StoriesContexType>(getInitialStoriesContextState())
export const useStoriesContext = () => React.useContext(StoriesContext)