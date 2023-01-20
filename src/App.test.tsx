import { isHtmlElement } from 'react-router-dom/dist/dom'
import { expect } from '@jest/globals'
import { act } from '@testing-library/react'
import { createRoot } from 'react-dom/client'
import App from './App'
import React from 'react'

describe('Testing react app', () => {
	const container = <div></div>
	it('Rendering app correctly', () => {
		act(() => createRoot(container as unknown as Element).render(App as unknown as React.ReactNode))
		console.log(isHtmlElement(App))
		expect(isHtmlElement(App)).toBe(true)
	})
})
