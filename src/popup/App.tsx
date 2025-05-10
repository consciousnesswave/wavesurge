import { SettingFilled } from "@ant-design/icons";
import { Flex, Radio, Typography } from "antd";
import type { CheckboxGroupProps } from "antd/es/checkbox";

const { Text } = Typography;

const App: React.FC = () => {
  const options: CheckboxGroupProps<string>['options'] = [
    { label: 'Direct', value: '0' },
    { label: 'System', value: '1' },
    { label: 'Proxy', value: '2' },
    { label: 'Auto', value: '3' }
  ];

  return (
    <>
      <Flex justify="space-between">
        <Text strong>Control Panel</Text>
        <SettingFilled />
      </Flex>
      <Radio.Group
        style={{ marginTop: 10 }}
        block
        options={options}
        defaultValue="1"
        optionType="button"
        buttonStyle="solid"
      />
    </>
  );
}

export default App;
