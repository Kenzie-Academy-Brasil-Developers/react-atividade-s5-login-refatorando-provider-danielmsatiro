import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/Auth";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const { logout } = useAuth();

  const history = useHistory<any>();

  return (
    <Container>
      <button onClick={() => logout(history)}>Logout</button>
    </Container>
  );
};

export default Dashboard;
