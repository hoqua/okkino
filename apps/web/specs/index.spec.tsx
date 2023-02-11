import React from 'react'
import { render } from '@testing-library/react'

import Page from '../app/page'
import { gql } from '../data-access/graphq-client'

gql.GetUsers = jest.fn().mockResolvedValue({ users: [] })

describe('Index', () => {
  it('should render successfully', async () => {
    const { baseElement } = render((await Page()) as unknown as React.ReactElement)
    expect(baseElement).toBeTruthy()
  })
})
