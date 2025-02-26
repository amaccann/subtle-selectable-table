import {fireEvent, render, waitFor} from '@testing-library/react'
import App from './App';

describe('Main app portal', () => {
  const renderComponent = async () => {
    const result = await render(<App />);
    await waitFor(() => expect(result.getByText('smss.exe')).toBeInTheDocument());
    return result;
  };

  beforeEach(() => {
    global.alert = jest.fn();
  });

  it('renders app, taking snapshot', async () => {
    const result = await renderComponent();
    expect(result.asFragment()).toMatchSnapshot();
  });

  it('toggles a single [first] row', async () => {
    const {container} = await renderComponent();
    const firstRow = container.querySelector('.table-row input');

    // Select the row
    fireEvent.click(container.querySelector('.table-row input')!);
    expect(firstRow?.getAttribute('aria-checked')).toEqual('true');

    // Unselect the row
    fireEvent.click(container.querySelector('.table-row input')!);
    expect(firstRow?.getAttribute('aria-checked')).toEqual('false');
  });

  it('selects all the Documents', async () => {
    let selectedRows;

    const result = await renderComponent();
    const selectAllBtn = result.container.querySelector('.table-actions input[type="checkbox"]');

    // Select all
    fireEvent.click(selectAllBtn!);
    selectedRows = result.container.querySelectorAll('.table input[aria-checked="true"]');
    expect(selectedRows.length).toEqual(6);

    // De-select all
    fireEvent.click(selectAllBtn!);
    selectedRows = result.container.querySelectorAll('.table input[aria-checked="false"]');
    expect(selectedRows.length).toEqual(6);
  });

  it('downloads all the selected documents', async () => {
    const result = await renderComponent();
    const selectAllBtn = result.container.querySelector('.table-actions input[type="checkbox"]');
    const downloadBtn = result.getByText(/Download selected/i);

    // Select all
    fireEvent.click(selectAllBtn!);
    fireEvent.click(downloadBtn!);

    expect(global.alert).toHaveBeenCalled();
  });
});