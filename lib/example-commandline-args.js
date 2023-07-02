const args = process.argv;

const handleNoArguments = () => {
    if (args.length === 2) {
        console.error('Expected at least one argument!');
        process.exit(1);
    }
}

const handleFlagPresent = () => {
    if (args[2] && args[2] === '-f') {
        console.log('Flag is present');
    } else {
        console.log('Flag is not present');
    }
}

const handleCustom = () => {
    const custom = (args[2] || 'Default');
    console.log(`Custom: ${custom}`);
}


const handleMultipleArguments = () => {
    // Check to see if the -f argument is present
    const flag = (
        // By using indexOf instead of relying on specific index values,
        // we are able to look for the arguments anywhere in the argument
        // vector, regardless of the order.
        args.indexOf('-f') > -1 ? 'Flag is present' : 'Flag is not present'
    );

    // Checks for --custom, if it has a value
    const customIndex = args.indexOf('--custom');
    let customValue;

    // Retrieve the value after --custom
    if (customIndex > -1) customValue = args[customIndex + 1];

    const custom = (customValue || 'Default');

    console.log(`Flag: ${flag}`);
    console.log(`Custom: ${custom}`);
}


// handleNoArguments();
//handleFlagPresent();
//handleCustom();
handleMultipleArguments();