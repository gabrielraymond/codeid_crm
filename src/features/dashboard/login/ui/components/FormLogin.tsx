import { Button, Checkbox, Form, Input, Card } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import useLoginForm from '../../hooks/useLoginForm';

const FormLogin: React.FC = () => {
	const { t } = useTranslation('common');
	const { mutationQuery, handleOnSubmit } = useLoginForm();
	const { isLoading, isError, error } = mutationQuery;

	const onFinish = async (values: any) => {
		await handleOnSubmit(values.email, values.password);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	if (isError) {
		return <p>{error.toString()}</p>;
	}

	return (
		<Card title={t('login')} style={{ borderRadius: '2%' }}>
			<Form
				layout="vertical"
				name="basic"
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label="Email"
					name="email"
					rules={[
						{
							required: true,
							message: t('input-email'),
							type: 'email',
						},
					]}
				>
					<Input style={{ fontSize: '1.05rem' }} />
				</Form.Item>
				<Form.Item
					label="Password"
					name="password"
					rules={[{ required: true, message: t('input-password') }]}
				>
					<Input.Password style={{ fontSize: '1.05rem' }} />
				</Form.Item>
				<Form.Item name="remember" valuePropName="checked">
					<Checkbox>{t('remember-me')}</Checkbox>
				</Form.Item>
				<Form.Item>
					<Button
						type="primary"
						size="large"
						shape="round"
						htmlType="submit"
						loading={isLoading}
					>
						{t('sign-in')}
					</Button>
				</Form.Item>
				<Link href="/" locale="id" passHref>
					<a>ID</a>
				</Link>
				|
				<Link href="/" locale="en" passHref>
					<a>EN</a>
				</Link>
			</Form>
		</Card>
	);
};

export default FormLogin;
