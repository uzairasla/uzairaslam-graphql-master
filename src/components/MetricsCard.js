import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { CardHeader as CardHeaderRaw, withStyles } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main,
  },
  title: {
    color: 'white',
  },
  subheader: {
    color: 'white',
  },
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

class MetricsCard extends Component {
  render() {
    const { metricInfo } = this.props;
    return (
      <Card className="mr-3 text-center d-inline-block">
        <CardHeader title={metricInfo.metric} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="div" className="mb-0">
            <h4>
              {metricInfo.value} <small className="text-muted">{metricInfo.unit}</small>{' '}
            </h4>
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default MetricsCard;
