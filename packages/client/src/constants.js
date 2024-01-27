const CONTRACT_ADDRESS = "0xAAeFbB0B7AB84F8d6Fe538628d002776f163ac10";

//NFT キャラクター の属性をフォーマットしてオブジェクトとして返します。
const transformCharacterData = (characterData) => {
    return {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
  };
  

export { CONTRACT_ADDRESS, transformCharacterData };
