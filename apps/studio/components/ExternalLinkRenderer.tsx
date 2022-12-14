import React, { PropsWithChildren } from 'react'
import { LaunchIcon } from '@sanity/icons'

const ExternalLinkRenderer = (props: PropsWithChildren) => (
  <span>
    {props.children} <LaunchIcon />
  </span>
)

export default ExternalLinkRenderer