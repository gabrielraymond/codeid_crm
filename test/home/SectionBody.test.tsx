import React from 'react';
import { render, screen } from '@testing-library/react';
import SectionBody from 'src/features/home/ui/components/SectionBody';

test('renders SectionBody component', () => {
	render(<SectionBody buttonLabel="Click me" body="title body" />);
	const ctaButtonLabel = screen.getByText(/Click me/i);
	const ctaBody = screen.getByText(/title body/i);
	expect(ctaButtonLabel).toBeInTheDocument();
	expect(ctaBody).toBeInTheDocument();
});
