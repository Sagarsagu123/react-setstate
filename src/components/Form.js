import React, { Component } from 'react';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            role: 'student',
            comments: '',
            errors: {
                username: '',
                comments: '',
            },
        };
    }

    // Handle change for username
    handleUsernameChange = (event) => {
        const username = event.target.value;
        let error = '';
        if (username.trim() === '') {
            error = 'Username is required.';
        } else if (username.length < 3) {
            error = 'Username must be at least 3 characters long.';
        }
        this.setState({
            username,
            errors: { ...this.state.errors, username: error },
        });
    };

    // Handle change for role
    handleRoleChange = (event) => {
        this.setState({ role: event.target.value });
    };

    // Handle change for comments
    handleCommentsChange = (event) => {
        const comments = event.target.value;
        let error = '';
        if (comments.trim() === '') {
            error = 'Comments are required.';
        } else if (comments.length < 10) {
            error = 'Comments must be at least 10 characters long.';
        }
        this.setState({
            comments,
            errors: { ...this.state.errors, comments: error },
        });
    };

    // Handle form submission
    handleSubmit = (event) => {
        event.preventDefault();
        const { username, comments, errors } = this.state;

        // Final validation before submission
        if (username.trim() === '') {
            errors.username = 'Username is required.';
        }
        if (comments.trim() === '') {
            errors.comments = 'Comments are required.';
        }

        this.setState({ errors });

        // Check if there are no errors
        if (!errors.username && !errors.comments) {
            alert(`Form Details:
            Username: ${this.state.username}
            Role: ${this.state.role}
            Comments: ${this.state.comments}`);
        } else {
            alert('Please fix the errors in the form before submitting.');
        }
    };

    render() {
        const { username, role, comments, errors } = this.state;

        return (
            <div style={{ margin: '20px' }}>
                <h1>User Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {/* Username Input */}
                    <div style={{ marginBottom: '10px' }}>
                        <label>
                            Username:
                            <input
                                type="text"
                                value={username}
                                onChange={this.handleUsernameChange}
                                style={{ marginLeft: '10px', padding: '5px', width: '200px' }}
                            />
                        </label>
                        {errors.username && (
                            <div style={{ color: 'red', marginTop: '5px' }}>{errors.username}</div>
                        )}
                    </div>

                    {/* Select Role */}
                    <div style={{ marginBottom: '10px' }}>
                        <label>
                            Role:
                            <select
                                value={role}
                                onChange={this.handleRoleChange}
                                style={{ marginLeft: '10px', padding: '5px' }}
                            >
                                <option value="student">Student</option>
                                <option value="teacher">Teacher</option>
                                <option value="admin">Admin</option>
                            </select>
                        </label>
                    </div>

                    {/* Comments */}
                    <div style={{ marginBottom: '10px' }}>
                        <label>
                            Comments:
                            <textarea
                                value={comments}
                                onChange={this.handleCommentsChange}
                                style={{
                                    marginLeft: '10px',
                                    padding: '5px',
                                    width: '300px',
                                    height: '100px',
                                }}
                            ></textarea>
                        </label>
                        {errors.comments && (
                            <div style={{ color: 'red', marginTop: '5px' }}>{errors.comments}</div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default UserForm;
