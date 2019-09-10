import ReactDOM from 'react-dom';

describe('Application root', () => {
  it('should render without crashing', async () => {
    const renderSpy = jest.spyOn(ReactDOM, 'render');

    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    expect(root.children.length).toBe(0);

    // We need the "import" to happen during the test so we use the async form
    await import('./index');

    expect(renderSpy).toHaveBeenCalledWith(expect.anything(), root);
    expect(root.children.length).toBeGreaterThan(0);
  });
});
