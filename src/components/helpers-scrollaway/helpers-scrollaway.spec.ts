import { newE2EPage } from '@stencil/core/testing';

describe('helpers-scrollaway', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<helpers-scrollaway></helpers-scrollaway>');

    const element = await page.find('helpers-scrollaway');
    expect(element).toHaveClass('hydrated');
  });
});
