interface AgentProps {
  agent: {
    name: string;
    image: string;
    role: string;
    background: string;
    skills: {
      active: {
        name: string;
        image: string;
        type: string;
        description: string;
        details: string[];
        video: string;
      };
      passive: {
        name: string;
        image: string;
        type: string;
        description: string;
        details: string[];
        video: string;
      };
      ultimate: {
        name: string;
        image: string;
        type: string;
        description: string;
        details: string[];
        video: string;
      };
    };
    weapon: {
      name: string;
      image: string;
      description: string;
    };
    upgrades: string[];
  };
}

const Agent: React.FC<AgentProps> = ({ agent }) => {
  return (
    <>
      <div id={agent.name}>
        <img src={agent.image} alt={agent.name} width={400} />
        <h1>{agent.name}</h1>
        <h3>Role: {agent.role}</h3>
        <h2>Background</h2>
        <p>{agent.background}</p>
      </div>

      <hr />

      <div id={`${agent.name}-skills`}>
        <h2>Skills</h2>

        <div id={`${agent.name}-activeSkill`}>
          <h3>Active Skill: {agent.skills.active.name}</h3>
          <img src={agent.skills.active.image} alt={agent.skills.active.name} />
          <p>Type: {agent.skills.active.type}</p>
          <p>{agent.skills.active.description}</p>
          <h4>Details</h4>
          <ul>
            {agent.skills.active.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
          <h4>How to play</h4>
          <video width={400} controls autoPlay loop>
            <source src={agent.skills.active.video} />
          </video>
        </div>

        <div id={`${agent.name}-passiveSkill`}>
          <h3>Passive Skill: {agent.skills.passive.name}</h3>
          <img src={agent.skills.passive.image} alt={agent.skills.passive.name} />
          <p>Type: {agent.skills.passive.type}</p>
          <p>{agent.skills.passive.description}</p>
          <h4>Details</h4>
          <ul>
            {agent.skills.passive.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
          <h4>How to play</h4>
          <video width={400} controls autoPlay loop>
            <source src={agent.skills.passive.video} />
          </video>
        </div>

        <div id={`${agent.name}-ultimateSkill`}>
          <h3>Ultimate Skill: {agent.skills.ultimate.name}</h3>
          <img src={agent.skills.ultimate.image} alt={agent.skills.ultimate.name} />
          <p>Type: {agent.skills.ultimate.type}</p>
          <p>{agent.skills.ultimate.description}</p>
          <h4>Details</h4>
          <ul>
            {agent.skills.ultimate.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
          <h4>How to play</h4>
          <video width={400} controls autoPlay loop>
            <source src={agent.skills.ultimate.video} />
          </video>
        </div>
      </div>

      <hr />

      <div id={`${agent.name}-weapon`}>
        <h2>Weapon</h2>
        <h3>{agent.weapon.name}</h3>
        <img src={agent.weapon.image} alt={agent.weapon.name} />
        <p>{agent.weapon.description}</p>
      </div>

      <hr />

      <div id={`${agent.name}-upgrades`}>
        <h2>Upgrades</h2>
        {agent.upgrades.map((upgrade, index) => (
          <img key={index} src={upgrade} alt={`Upgrade ${index + 1}`} loading="lazy" />
        ))}
      </div>
    </>
  );
};

export default Agent;
