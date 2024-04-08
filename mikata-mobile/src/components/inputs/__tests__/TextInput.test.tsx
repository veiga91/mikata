import { render, screen, fireEvent } from '@testing-library/react-native';
import { TextInput } from "../TextInput";

describe("TextInput", () => {
	test("input shows the typed value", () => {
		const label = "My Input"
		const mockFn = jest.fn();

		render(<TextInput label={label} onChangeText={mockFn} />);

		const input = screen.getByLabelText(`${label} input`);

		fireEvent.changeText(input, 'a1');
		expect(mockFn).toHaveBeenCalledWith('a1');
		expect(input.props.value).toBe('a1')
	})

})