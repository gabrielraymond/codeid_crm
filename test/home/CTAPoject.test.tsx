import React from 'react';
import { render, screen } from '@testing-library/react';
import CTAProject from 'src/features/home/ui/components/CTAProject';

test('renders CTA Project component', () => {
	render(<CTAProject title="this is the title" body="this is the body" />);
	const ctaTitle = screen.getByText(/this is the title/i);
	const ctaBody = screen.getByText(/this is the body/i);
	expect(ctaTitle).toBeInTheDocument();
	expect(ctaBody).toBeInTheDocument();
});
