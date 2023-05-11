import React from 'react';
import { Resolver, useForm } from 'react-hook-form';

type FormValues = {
    email: string;
    password: string;
};

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.email ? values : {},
        errors: !values.email
            ? {
                  email: {
                      type: 'required',
                      message:
                          'Please enter your Spotify username or email address.',
                  },
                  password: {
                      type: 'required',
                      message: 'Please enter your password.',
                  },
              }
            : {},
    };
};

const Login: React.FunctionComponent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ resolver });
    const onSubmit = (data: FormValues) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Log in to Spotify</h1>

            <span>
                <label htmlFor="username">Email or username</label>
                <input
                    id="username"
                    type="text"
                    placeholder="Email or username"
                    {...register('email', {})}
                />
                {errors?.email && <p>{errors.email.message}</p>}
            </span>
            <span>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    {...register('password', {})}
                />
                {errors?.password && <p>{errors.password.message}</p>}
            </span>

            <button type="submit">Log In</button>
        </form>
    );
};

export default Login;
