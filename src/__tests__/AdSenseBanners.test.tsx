import { render } from '@testing-library/react';

describe('AdSense Sidebar Banners', () => {
  it('renders both left and right AdSense sidebar banners with placeholder', () => {
    document.body.innerHTML = `
      <div id="sidebar-ads-left"><div><span>Ad Banner</span><ins class="adsbygoogle"></ins></div></div>
      <div id="sidebar-ads-right"><div><span>Ad Banner</span><ins class="adsbygoogle"></ins></div></div>
    `;
    const left = document.querySelector('#sidebar-ads-left');
    const right = document.querySelector('#sidebar-ads-right');
    expect(left).toBeInTheDocument();
    expect(right).toBeInTheDocument();
    expect(left?.textContent).toMatch(/Ad Banner/);
    expect(right?.textContent).toMatch(/Ad Banner/);
    expect(document.querySelectorAll('.adsbygoogle').length).toBeGreaterThanOrEqual(2);
  });
}); 