import React from 'react'
import { render } from '@testing-library/react'

import Page from '../app/[lang]/page'
import { gql } from '../data-access/graphq-client'

gql.GetHomeImages = jest.fn().mockResolvedValue({ homeBlocks: [] })

describe('Index', () => {
  it('should render successfully', async () => {
    const { baseElement } = render((await Page()) as unknown as React.ReactElement)
    expect(baseElement).toBeTruthy()
  })
})
