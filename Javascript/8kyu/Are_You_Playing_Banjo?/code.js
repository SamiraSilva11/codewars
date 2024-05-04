function areYouPlayingBanjo(name) {
    // Implement me
    if(name.toLowerCase().startsWith('r')){
      name += ' plays banjo'
    }else{
      name += ' does not play banjo'
    }
    return name;
  }