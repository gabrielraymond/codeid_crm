import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Card } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import useLoginForm from '../../hooks/useLoginForm';

const FormLogin: React.FC = () => {
	const { t } = useTranslation('common');
	const { mutationQuery, handleOnSubmit } = useLoginForm();
	const { isLoading, isError, error } = mutationQuery;

	const onFinish = async (values: any) => {
		await handleOnSubmit(values.username, values.password);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	if (isError) {
		return <p>{error.toString()}</p>;
	}

	return (
		<div
			style={{
				padding: '2rem 2rem',
				// display: 'flex',

				width: '70%',
			}}
		>
			{/* <Card title={t('login')} style={{ borderRadius: '2%' }}> */}
			<h1
				style={{
					fontWeight: '700',
					fontSize: '38px',
					color: '#595959',
					marginBottom: '0',
				}}
			>
				WELCOME BACK!
			</h1>
			<p>Please login to your account</p>
			<Form
				layout="vertical"
				name="basic"
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label={
						<>
							<UserOutlined />
							Username
						</>
					}
					name="username"
					rules={[
						{
							required: true,
							message: t('input-username'),
						},
					]}
					style={{ marginTop: '4rem' }}
				>
					<Input
						style={{ fontSize: '1.05rem', padding: '1rem' }}
						placeholder={'Masukkan username'}
					/>
				</Form.Item>
				<Form.Item
					label={
						<>
							<LockOutlined /> Password
						</>
					}
					name="password"
					rules={[{ required: true, message: t('input-password') }]}
					style={{ marginBottom: '3rem' }}
				>
					<Input.Password
						style={{ fontSize: '1.05rem', padding: '1rem' }}
						placeholder={'Masukkan password'}
					/>
				</Form.Item>
				{/* <Form.Item name="remember" valuePropName="checked">
					<Checkbox>{t('remember-me')}</Checkbox>
				</Form.Item> */}
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Link href="/">
						<a style={{ color: '#330D54' }}>Lupa Password?</a>
					</Link>
					<Form.Item>
						<Button
							type="primary"
							size="large"
							style={{ backgroundColor: '#330D54', width: '150px' }}
							htmlType="submit"
							loading={isLoading}
						>
							{t('sign-in')}
						</Button>
					</Form.Item>
				</div>
				<Link href="/" locale="id" passHref>
					<a style={{ color: '#949494' }}>ID</a>
				</Link>
				|
				<Link href="/" locale="en" passHref>
					<a style={{ color: '#949494' }}>EN</a>
				</Link>
			</Form>
			{/* </Card> */}
		</div>
	);
};

export default FormLogin;
